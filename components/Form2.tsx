import { FormName, useSubmitForm } from '../hooks/use-submit-form'

export default function Form2() {
  const { isSubmitting, handleSubmit } = useSubmitForm(FormName.OFFER_SERVICE)

  return (
    <form onSubmit={handleSubmit}>
      <label className={'form-title'} htmlFor='service'>What services can you offer?</label>
      <input
        name='service'
        type='text'
        placeholder='Type of service you can offer'
        required
      />
      <label htmlFor='mission'>
        {/*What web3 missions have you already completed and for what projects?{' '}*/}
      </label>
      <input
        name='mission'
        type='text'
        placeholder='Web3 missions and projects you have worked for'
        required
      />
      <div className={'triple'}>
        <input
          name='salaire'
          type='text'
          placeholder='Salary'
          required
        />
        <input
          name='twitter'
          type='text'
          placeholder='Twitter handle'
          required
        />
        <input
          name='discord'
          type='text'
          placeholder='Discord ID'
          required
        />
      </div>
      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Sending ...' : 'Send'}
      </button>
    </form>
  )
}
