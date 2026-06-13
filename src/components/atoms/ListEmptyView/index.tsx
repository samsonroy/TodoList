import { View, Text } from 'react-native';
import { TextConstants } from '../../../constants/text';

// A simple component to show when the "TODO" list is empty
const ListEmptyView = () => {
  return (
    <View className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-8">
      <Text className="text-center text-slate-500">
        {TextConstants.NO_TODOS_MESSAGE}
      </Text>
    </View>
  );
};

export default ListEmptyView;
