
function UserPage() {
    return(
        <div className="bg-content-section">
            <div className="content-container">
                <section className="user-page">
                    <div className="user-bio-container">
                        <div className="user-bio-thumbnail"></div>
                        <div>
                            <h2 className="user-bio-name">User Name</h2>
                            <p className="user-favorites">16 favoritos</p>
                        </div>
                    </div>
                    <div className="user-data-container">
                        <div className="user-data">
                            <h3>Usuário</h3>
                            <p>Usuário</p>
                        </div>
                        <div className="user-data">
                            <h3>Nome completo</h3>
                            <p>Nome completo</p>
                        </div>
                        <div className="user-data">
                            <h3>Email</h3>
                            <p>Email</p>
                        </div>
                        <div className="user-data">
                            <h3>Celular</h3>
                            <p>Celular</p>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    );
}

export default UserPage;