import { FormName, useSubmitForm } from '../hooks/use-submit-form'

export default function Form1() {
  const { isSubmitting, handleSubmit } = useSubmitForm(FormName.NEED_SERVICE)

  return (
    <form className={'form-1'} onSubmit={handleSubmit}>
      <label className={'form-title'} htmlFor='service'>Need a service ?</label>
      <input
        name='service'
        type='text'
        placeholder='Type of service you need'
        required
      />
      <label htmlFor='description'>
        {/*Describe brievly your project*/}
      </label>
      <input
        name='description'
        type='text'
        placeholder='Describe your project'
        required
      />
      <div className={'half'}>
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
