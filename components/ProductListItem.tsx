import { Text } from "react-native";


function ProductListItem({ product }: any) {
 return <Text style={{ fontSize: 30 }}>{product.name} </Text>;
}



export default ProductListItem;