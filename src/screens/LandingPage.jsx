import React from 'react'

const LandingPage = () => {
    return (
      <div className="container">
        <header className="header">
          <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
        </header>
  
        <main className="main-content">
          <section className="welcome-section" style={{ marginTop: 0 }}>
            <h2 style={{ marginTop: 0, color: 'black' }}>Bienvenido</h2>
            <p>
              Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
            </p>
          </section>
  
          <section className="topics-section">
            <h2 style={{ marginTop: 0, color: 'black' }}>Temas Cubiertos</h2>
            <table>
              <tbody>
              <tr>
                <td>Componentes funcionales y de clase</td>
                <td>Uso de <strong>React</strong> hooks como useState y useEffect</td>
                <td>Creación de custom <strong>hooks</strong> como useForm</td>
                <td>Gestión de variables de estado con <strong>useState</strong></td>
                <td>Gestión de estado global con Redux</td>
                <td>Integración de Redux con React</td>
                <td>Manejo de Formularios en React</td>
                <td>Publicando nuestra Página con GitHub Pages</td>
              </tr>
              </tbody>
            </table>
          </section>
  
          <section className="resources-section">
            <h2 style={{ marginTop: 0, color: 'black' }}>Recursos Adicionales</h2>
            <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
          </section>
        </main>
  
        <footer className="footer">
          <p>© 2025 Módulo 7. USIP.</p>
        </footer>
      </div>
    );
  };

export default LandingPage
