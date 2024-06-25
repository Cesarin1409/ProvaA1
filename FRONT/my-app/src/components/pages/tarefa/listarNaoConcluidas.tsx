import React, { useEffect, useState } from 'react';
import { Tarefa } from '../../../models/Tarefa';

const ListaTarefas: React.FC = () => {
    const [Tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/tarefas/listar') // Substitua pela URL da sua API
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setTarefas(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {Tarefas.map(Tarefa => (
                        <tr key={Tarefa.Tarefaid}>
                            <td>{Tarefa.titulo}</td>
                            <td>{Tarefa.descricao}</td>
                    
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaTarefas;