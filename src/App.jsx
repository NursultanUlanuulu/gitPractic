import Product from "./components/Product/Product"
import { Weather } from "./components/Jumaniyaz/weather"
import Header from "./components/Header/Header"
import Test from "./components/test/Test";

function App() {
	return (
		<>
			<h1>{/* Собирайте компоненты здесь */}</h1>
			<Header />
			<Cards />
      <Test />
			<Product />
			<Weather />

		</>
	)
}

export default App

