import React from 'react';
import '../css/Main.css';
import 'https://use.fontawesome.com/releases/v5.6.3/css/all.css';

function main() {
    return (
        <><header>
            <form action="" id="register">
                <p>Faça seu login</p>
                <div className="field">
                    <input type="email" placeholder="Email" required />
                </div>
                <br />
                <div className="field">
                    <input type="password" placeholder="Senha" required />
                </div>
                <br />
                <button id="registerBtn">Login</button>
                <a href="cadastro.html" id="Case">
                    Não tem login? Se cadastre
                </a>
            </form>

            <div className="bg-gradient">
                <div className="header-border">
                    <div id="logo">
                        Vital<strong id="verde">Vet</strong>
                    </div>
                    <nav className="menu">
                        <button type="button" className="open-menu">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="backdrop"></div>
                        <ul>
                            <li className="close-menu">
                                <button type="button">
                                    <i className="fas fa-times"></i>
                                </button>
                            </li>
                            <li id="CadastroBtn">
                                <button>Cadastre-se</button>
                            </li>
                            <li id="SobreBtn">
                                <button>Sobre</button>
                            </li>
                            <li id="EmergenciaBtn">
                                <button>Emergência</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header><section className="home">
                <main className="container">
                    <div id="MoreAboutTitle">
                        <div id="range">
                            <h1 className="title">
                                Bem vindo a Vital<strong id="verde">Vet</strong>
                            </h1>
                        </div>
                        <p>
                            Seja muito bem-vindo à página da VitalVet, a sua clínica veterinária de confiança dedicada ao bem-estar e saúde dos seus animais de estimação. Aqui na VitalVet, nós entendemos que seus companheiros peludos são mais do que apenas animais de estimação - eles são membros da sua família. É por isso que nos empenhamos em oferecer o mais alto padrão de cuidados veterinários, combinando experiência, compaixão e tecnologia de ponta.
                        </p>
                    </div>
                    <h1 className="titleH1">O que nos torna especiais?</h1>
                    <br />

                    <div className="MoreAbout">
                        <div className="imgAbout" id="img1"></div>
                        <div className="aboutText">
                            <h2 className="titleH2">Equipe Dedicada</h2>
                            <p>
                                Nossa equipe de veterinários e profissionais de saúde animal é apaixonada pelo que faz e está sempre atualizada com as últimas tendências e avanços na medicina veterinária. Cada membro da nossa equipe é escolhido não apenas pela sua competência, mas também pela sua paixão por animais.
                            </p>
                        </div>
                    </div>

                    <div className="MoreAbout">
                        <div className="imgAbout" id="img2"></div>
                        <div className="aboutText">
                            <h2 className="titleH2">Atendimento Personalizado</h2>
                            <p>
                                Sabemos que cada animal é único, e é por isso que oferecemos um atendimento personalizado. Trabalhamos em estreita colaboração com você para entender as necessidades específicas do seu animal de estimação e criar um plano de tratamento sob medida.
                            </p>
                        </div>
                    </div>

                    <div className="MoreAbout">
                        <div className="imgAbout" id="img3"></div>
                        <div className="aboutText">
                            <h2 className="titleH2">Instalações Modernas</h2>
                            <p>
                                A VitalVet está equipada com instalações modernas e equipamentos de última geração para garantir que seu animal de estimação receba o melhor atendimento possível.
                            </p>
                        </div>
                    </div>

                    <div className="MoreAbout">
                        <div className="imgAbout" id="img4"></div>
                        <div className="aboutText">
                            <h2 className="titleH2">Amor Incondicional</h2>
                            <p>
                                Nós amamos o que fazemos, e isso é evidente em cada interação com você e seu animal de estimação. Nosso objetivo é criar um ambiente caloroso e acolhedor, onde você e seu animal de estimação se sintam em casa.
                            </p>
                        </div>
                    </div>
                </main>
            </section><footer>
                <div className="container">
                    <h6 id="dues">&copy; 2023 Clínica Veterinária VitalVet</h6>
                    <nav className="menu">
                        <ul>
                            <li id="ComecoBtnFooter">
                                <button>Começo</button>
                            </li>
                            <li id="SobreBtnFooter">
                                <button>Sobre</button>
                            </li>
                            <li id="EmergenciaBtnFooter">
                                <button>Emergência</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer><script src="../js/Main.js"></script></>
    );
}

export default App;
