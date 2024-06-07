import './details.css';


// Pagina de detalhes/informacoes adicionais sobre o jogo
// o usuario é redirecionado para essa página ao clicar no CardGame do respectivo jogo

function Details(){
    return(
        <div className="details-container">
            <div className="game-data-main">
                <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/405px-God_of_War_2018_capa.png"alt="" width={"200px"} />
                <div className="game-data-titles">
                    <h1>God of war 4</h1>
                    <h4>lançado em: 2018</h4>
                </div>
            </div>
            <p> genero: aventura, ação</p>
            <p> God of War é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado
                 pela Sony Interactive Entertainment (SIE). Foi lançado em 20 de abril de 2018 para PlayStation 4 e em 14 de janeiro de
                  2022 para Microsoft Windows. É o oitavo título da série God of War e também o oitavo em ordem cronológica, sendo sequência
                   dos eventos ocorridos em God of War III (2010). Ao contrário dos jogos anteriores, que eram vagamente baseados na mitologia 
                   grega, este título é vagamente baseado na mitologia nórdica, com a maior parte do tempo situado na antiga Noruega no reino de Midgard.
                    Pela primeira vez na série, há dois protagonistas principais: Kratos, o antigo deus da guerra grego que é acompanhado por seu jovem
                     filho Atreus. Após a morte da segunda esposa de Kratos e mãe de Atreus, eles viajam para cumprir sua promessa de espalhar suas cinzas
                      no pico mais alto dos nove reinos. Kratos mantém seu passado conturbado em segredo de Atreus, que não tem consciência de sua natureza
                       divina. Ao longo da jornada, eles encontram monstros e deuses do mundo nórdico.</p>
            <h3> Confira logo abaixo o trailer do jogo:</h3>
            <iframe src="https://www.youtube.com/embed/FyIwEFXOcaE?si=vEnnrqp86jOtwbB7"></iframe>
        </div>
    )
}

export default Details;