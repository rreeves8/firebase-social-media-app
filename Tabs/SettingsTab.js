


export default SettingsTab = () => {
    const { user } = useContext(AuthenticatedUserContext);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Text style={styles.text}>Logins</Text>

                <Button
                    onPress={handleSignOut}
                    title="LogOut"
                    color="#841584"
                    style={styles.button}
                />
            </SafeAreaView>
        </View>
    );
}