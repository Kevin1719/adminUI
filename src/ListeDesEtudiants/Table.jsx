const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.nom}</td>
            <td>{item.prenom}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
