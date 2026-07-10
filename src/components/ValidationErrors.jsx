export function ValidationErrors({errors, messages}) {
    if(!errors || Object.keys(errors).length === 0) {
        return null;
    }

    const uniqueErrors = [...new Set(Object.values(errors))];

    return (
        <ul className="error-message">
          {uniqueErrors.map((err) => (
           <li key={err}>{messages[err]}</li>
          ))}
        </ul>
      )
}