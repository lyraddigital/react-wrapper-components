import { Flex } from 'components/Layout';
import { FancyTextBox, FormField, GroupForm } from 'components/Forms';
import { SettingMessages } from 'core/messages';

export const SettingsPage = () => {
    return (
        <Flex direction="column" alignItems="center">
            <GroupForm title="Notification Settings">
                <FormField fieldName="Receive Email" explanation={SettingMessages.ReceiveEmail}>
                    <input type="checkbox" />
                </FormField>
                <FormField fieldName="Receive SMS" explanation={SettingMessages.ReceiveSMS}>
                    <input type="checkbox" />
                </FormField>
            </GroupForm>

            <GroupForm title="Stream Settings">
                <FormField fieldName="Stream Key" explanation={SettingMessages.StreamKey}>
                    <FancyTextBox hideText={true} />
                </FormField>
                <FormField fieldName="Sub Only chat" explanation={SettingMessages.SubOnly}>
                    <input type="checkbox" />
                </FormField>
                <FormField fieldName="Mods can unban" explanation={SettingMessages.ModsCanUnban}>
                    <input type="checkbox" />
                </FormField>                            
            </GroupForm>        
        </Flex>
    );
}