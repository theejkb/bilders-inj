import { FormName, useSubmitForm } from '../hooks/use-submit-form'

export default function FormBuilderDox() {
  const { isSubmitting, handleSubmit } = useSubmitForm(FormName.PROJECT)

  return (
    <form onSubmit={handleSubmit}>
      <h3> You are a project and you want to build on the Injective blockchain and
        wanting to offer a trust certificate?</h3>
      <label htmlFor='projet'>BilderDox is the service they need for that. </label>
      <input name="projet" type="text" placeholder="Votre projet" required />
      <input
        name="twitter"
        type="text"
        placeholder="Votre liens twitter"
        required
      />
      <input
        name="discord"
        type="text"
        placeholder="Votre ID Discord"
        required
      />
      <p>
        The founders can dox themselves with us, and as a result, they will
        receive a Dox certificate that can assure ecosystem users that the
        founders have disclosed their identities.
      </p>
      <p>You can benefit from marketing support</p>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending ...' : 'Send'}
      </button>
    </form>
  )
}
