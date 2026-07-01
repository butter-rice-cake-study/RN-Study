import { Image } from "expo-image";
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


// 1. 20개 이상의 가상 데이터 생성 (Mock Data)
const CARD_DATA = Array.from({ length: 25 }, (_, index) => ({
  id: `card-${index + 1}`,
  title: `멋진 카드 제목 ${index + 1}`,
  description: `이 카드는 ${index + 1}번째 가상 데이터 카드입니다. Expo Image를 사용해 부드럽게 로딩됩니다.`,
  // 고화질 random 이미지 주소 (Unsplash)
  imageUrl: `https://picsum.photos/id/${(index + 10) * 2}/400/300`,
}));

// 화면 너비를 구해 마진을 제외한 카드 너비 계산
const { width } = Dimensions.get('window');

export default function App() {
  
  // 2. 개별 카드 렌더링 함수
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{ uri: item.imageUrl }}
        contentFit="cover"
        cachePolicy="memory-disk"
        recyclingKey={item.id}
        transition={300} // 이미지가 부드럽게 나타나는 애니메이션 (밀리초)
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Card List ({CARD_DATA.length})</Text>
      <FlatList
        data={CARD_DATA}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false} // 스크롤 바 숨김
      />
    </SafeAreaView>
  );
}

// 3. StyleSheet를 이용한 스타일링
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: '#1d1d1f',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20, // 리스트 최하단 여백
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    // iOS 그림자 스타일
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Android 그림자 스타일
    elevation: 3,
    overflow: 'hidden', // 이미지가 카드 테두리(BorderRadius) 밖으로 나가지 않도록 설정
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});