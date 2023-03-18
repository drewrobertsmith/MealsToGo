import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
    AccountBackground,
    AccountCover,
    AccountStatusBar,
} from "../components/account.styles";

export const RegisterScreen = () => {
    return (
        <>
            <AccountStatusBar />
            <AccountBackground>
                <SafeArea>
                    <Text>Register Screen</Text>
                </SafeArea>
            </AccountBackground>
        </>
    );
};
