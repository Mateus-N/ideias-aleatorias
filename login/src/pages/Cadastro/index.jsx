import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Index'
import Input from '../../components/Input/Index'
import './styles.css'

export default function Cadastro() {
    return (
        <div className='cadastro__page'>
            <h1 className="titulo__principal">Corais</h1>
            <p className="titulo__subtitulo">Crie sua conta</p>

            <form className="formulario__cadastro">
                <Input
                    placeholderText={"nome"}
                    labelText={"Nome"}
                    nameId={"Username"}
                />
                <Input
                    placeholderText={"email@email.com"}
                    labelText={"Email"}
                    nameId={"Email"}
                />
                <Input
                    placeholderText={"*********"}
                    labelText={"Senha"}
                    nameId={"Password"}
                    tipo={"password"}
                />
                <Input
                    placeholderText={"*********"}
                    labelText={"Confirmar senha"}
                    nameId={"RePassword"}
                    tipo={"password"}
                />
                <Button
                    text={"Criar conta"}
                />
                <div className='rodape'>
                    <p>Já possui uma conta?</p>
                    <Link to={'/'} className='rodape__link' >Faça login aqui</Link>
                </div>
            </form>
        </div>
    )
}