import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";

 function Home() {
    // export sempre que exportar no function tem que colocar as {Home}
    // dentro do return cria a estrutura html //
    return(
        <div className="home">
            <Header/>
            <Banner/>
        </div>            
    );
}
export default Home // exportando a função - primeira forma.