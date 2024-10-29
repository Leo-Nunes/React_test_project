import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setmateriaA] = useState(0);
    const [materiaB, setmateriaB] = useState(0);
    const [materiaC, setmateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("Componente iniciou");

        return () => {
            console.log("O componente finalizou");
        }
    }, []);

    useEffect(() => {
        console.log("O estado mudou");
    }, [nome]);

    useEffect(() => {
        console.log("Matéria A mudou para: " + materiaA);
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome} foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome} não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => <li key={item}>{item}</li>)}
            </ul>

            <input type="text" placeholder="Seu nome" value={nome} onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setmateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setmateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
            {/* Conteúdo teste */}
            {/* <p>O aluno foi aprovado</p>
            {materiaA}
            {materiaB}
            {materiaC} */}
        </form>
    )
}

export default Formulario;