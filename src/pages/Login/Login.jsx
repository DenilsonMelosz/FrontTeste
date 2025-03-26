import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import illustration from "../../assets/illustration..jpg";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Implementar a lógica de autenticação -  Java 
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center bg-[#315259] ">
        <div className="text-center text-white p-8">
          <img
            src={illustration}
            alt="Projeto"
            className="logo"
          />
        </div>
      </div>

      {/* Formulario de Login */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-50">
        <div className="w-96">
          <h1 className="text-Thema flex items-center space-x-4">
            <span>Codigos</span>
            <span>Caoticos</span>
          </h1>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">Bem vindo!</h2>
          <p className="text-login text-gray-600 mb-6">Entre com seu e-mail e senha para acessar sua conta.</p>

             {/* Cadastro de usuarios*/}
          <div className="register">
              <Link to="/Register" className="text-purple-600">
                Não possui conta? <span className="font-bold">Registre-se Grátis</span>
              </Link>
            </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite a sua Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 btn-visibility"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

               {/* Formulario de Login */}
               <div className="flex justify-end text-sm text-gray-600 mb-6">
               <Link to="/recuperar-senha" className="text-gray-600">
                Esqueceu sua <span className="font-bold">Senha?</span> </Link>
                </div>
             
             

            <button type="submit" className="login-button">
            Entrar
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
