import { useSelector } from 'react-redux';


const FavoritePage = () => {
	const favorites = useSelector(state => state.favorites);
	
	return ( 
		<>
		<h1>Favorite Page</h1>
		</>
	 );
}
 
export { FavoritePage };