export default function FormBuilderDox() {
  return (
    <form
      method='POST'
      action='https://script.google.com/macros/CA-MARCHE-PAS-WESH/exec'
    >
      <h3>Bilder DOX</h3>
      <label>You are a project and you want to build on the Injective blockchain and wanting to offer a trust certificate? </label>
      <label>BilderDox is the service they need for that.  </label>
      <input name='Projet' type='text' placeholder='Votre projet' required />
      <input name='Twitter' type='text' placeholder='Votre liens twitter' required />
      <input name='Discord' type='text' placeholder='Votre ID Discord' required />
      <label>The founders can dox themselves with us, and as a result, they will receive a Dox certificate that can assure ecosystem users that the founders have disclosed their identities.</label>
      <label>You can benefit from marketing support</label>
      <button type='submit'>Send</button>
    </form>
  )
}
