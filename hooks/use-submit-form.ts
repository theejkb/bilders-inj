import { FormEvent, useCallback, useState } from 'react'

const SHEET_API_URL =
  'https://script.google.com/macros/s/AKfycbxjt3LKYy5dky11pCqJyNJbAHvg66dngiG8ZfEV6FC3etIwo1lZDTyHvMI3dEkQbCmW/exec'

type CustomFormEvent<T = Element> = Omit<FormEvent<T>, "target"> & { target: T }

export const enum FormName {
  NEED_SERVICE = 'needService',
  OFFER_SERVICE = 'offerService',
  PROJECT = "project"
}

export const useSubmitForm: (formName: FormName) => {
  isSubmitting: boolean
  handleSubmit: (event: CustomFormEvent<HTMLFormElement>) => void
} = (formName) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(
    (event: CustomFormEvent<HTMLFormElement>) => {
      event.preventDefault()

      setIsSubmitting(true)
      const data = new FormData(event.currentTarget)

      data.set('formName', formName)

      fetch(SHEET_API_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      })
        .then(() => {
          // TODO: handle toast here
          alert('Success !')
          event.target.reset()
        })
        .catch((e) => {
          console.error(e)
          alert('Error !')
        })
        .finally(() => {
          setIsSubmitting(false)
        })
    },
    [formName],
  )

  return {
    isSubmitting,
    handleSubmit,
  }
}
