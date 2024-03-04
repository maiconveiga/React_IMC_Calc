import styles from './main.module.css'

function Tabela(){
    const tabela = [
        ['IMC','Classificação','Obesidade','Calculo'],
        ['MENOR QUE 18,5','MAGREZA',0,18.5],
        ['ENTRE 18,5 E 24,9','NORMAL',0,24.9],
        ['ENTRE 25,0 E 29,9','SOBREPESO',1,29.9],
        ['ENTRE 30,0 E 39,9','OBESIDADE',2,39.9],
        ['MAIOR QUE 40,0','OBESIDADE GRAVE',3,40],
    ]
    return(
        <>
        <h3>Tabela de IMC</h3>
        <table className={styles.tabela}>
            <thead>
                <tr>
                    <td>{tabela[0][0]}</td>
                    <td>{tabela[0][1]}</td>
                    <td>{tabela[0][2]}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{tabela[1][0]}</td>
                    <td>{tabela[1][1]}</td>
                    <td>{tabela[1][2]}</td>
                </tr>
                <tr>
                    <td>{tabela[2][0]}</td>
                    <td>{tabela[2][1]}</td>
                    <td>{tabela[2][2]}</td>
                </tr>
                <tr>
                    <td>{tabela[3][0]}</td>
                    <td>{tabela[3][1]}</td>
                    <td>{tabela[3][2]}</td>
                </tr>
                <tr>
                    <td>{tabela[4][0]}</td>
                    <td>{tabela[4][1]}</td>
                    <td>{tabela[4][2]}</td>
                </tr>
            </tbody>

        </table>
        </>
        
    )
}

export default Tabela;