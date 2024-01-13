export default function Form1() {
  return (
    <form
      method='POST'
      action='https://script.google.com/macros/CA-MARCHE-PAS-WESH/exec'
    >
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h3>Whether you're a freelancer or a project founder, our DM are open if you want branding that sets you apart from your competitors. </h3>
      <label>Besoin d’un service ?</label>
      <input name='Services' type='text' placeholder='Art, développement, community...' required />
      <label>Décrivez nous votre projet rapidement et votre demande.</label>
      <input name='Details' type='text' placeholder='Details supplémentaires' required />
      <input name='Twitter' type='text' placeholder='Votre liens twitter' required />
      <input name='Discord' type='text' placeholder='Votre ID Discord' required />
      <button type='submit'>Send</button>
    </form>
  )
}
