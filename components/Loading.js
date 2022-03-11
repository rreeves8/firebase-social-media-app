import { ActivityIndicator } from 'react-native';

export default () => {
    return (
        <ActivityIndicator
            size='large'
            animating={this.state.isLoading}
            style={{ marginTop: 50 }}
        />
    )
}