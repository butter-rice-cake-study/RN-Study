import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ARCH_ITEMS = [
  {
    title: 'JSI',
    body: 'JavaScript ↔ C++ 직접 통신. Bridge JSON 직렬화 없음.',
  },
  {
    title: 'Fabric',
    body: '새 UI 렌더러. Shadow Tree + React 18 동시성.',
  },
  {
    title: 'TurboModules',
    body: 'JSI 기반 네이티브 모듈. 필요 시 lazy-load.',
  },
] as const;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.badge}>Week 1 · Expo SDK 55</Text>
        <Text style={styles.name}>조은경</Text>
        <Text style={styles.subtitle}>RN 개요 + New Architecture</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>New Architecture (SDK 55 기본)</Text>
          {ARCH_ITEMS.map((item) => (
            <View key={item.title} style={styles.row}>
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.rowBody}>{item.body}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.note}>
          EAS Preview 빌드 링크는 PR 설명에 Android / iOS URL을 첨부합니다.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flexGrow: 1,
    padding: 24,
    gap: 12,
  },
  badge: {
    fontSize: 13,
    fontWeight: '600',
    color: '#208AEF',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#F0F6FF',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  row: { gap: 4 },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  rowBody: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  note: {
    fontSize: 13,
    color: '#666',
    marginTop: 8,
  },
});
