export default function Honeypot() {
    <div className="honeypot" aria-hidden="true">
          <label htmlFor="contactPerson">Company</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            autoComplete="off"
            tabIndex="-1"
          />
        </div>
}