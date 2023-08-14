import { Link } from 'react-router-dom'
import Button from '../../components/Button/Index'
import Input from '../../components/Input/Index'
import './styles.css'

export default function Login() {
    return (
        <div className="login__page">
            <h1 className="titulo__principal">Corais</h1>
            <p className="titulo__subtitulo">Faça login e comece a usar!</p>

            <form className="formulario__login">
                <Input
                    placeholderText={"email@email.com"}
                    labelText={"Email"}
                    nameId={"email"}
                />
                <Input
                    placeholderText={"*********"}
                    labelText={"Senha"}
                    nameId={"senha"}
                    tipo={"password"}
                />
                <Button
                    type="submmit"
                    text={"Entrar"}
                />
                <div className='rodape'>
                    <p>Não possui uma conta?</p>
                    <Link to={'/cadastro'} className='rodape__link' >Cadastre-se aqui</Link>
                </div>
            </form>
        </div>
    )
}