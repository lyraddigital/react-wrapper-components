import { Flex } from 'components/Layout';
import { FancyTextBox } from 'components/Forms';
import { SettingMessages } from 'core/messages';

export const SettingsPage = () => {
    return (
        <Flex direction="column" alignItems="center">
            <form className="groupForm">
                <h2>Notification Settings</h2>
                <div className="groupFormBody">
                    <label className="formFieldLabel">Receive Email</label>
                    <div className="formField">
                        <input type="checkbox" />
                        <div className="formFieldExplanation">
                            {SettingMessages.ReceiveEmail}
                        </div>
                    </div>
                    <label className="formFieldLabel">Receive SMS</label>
                    <div className="formField">
                        <input type="checkbox" />
                        <div className="formFieldExplanation">
                            {SettingMessages.ReceiveSMS}
                        </div>
                    </div>
                </div>
                <div className="buttonRow">
                    <button type="button">Save</button>
                </div>
            </form>

            <form className="groupForm">
                <h2>Stream Settings</h2>
                <div className="groupFormBody">
                    <label className="formFieldLabel">Stream Key</label>
                    <div className="formField">
                        <FancyTextBox hideText={true} />
                        <div className="formFieldExplanation">
                            {SettingMessages.StreamKey}
                        </div>
                    </div>
                    <label className="formFieldLabel">Sub Only chat</label>
                    <div className="formField">
                        <input type="checkbox" />
                        <div className="formFieldExplanation">
                            {SettingMessages.SubOnly}
                        </div>
                    </div>
                    <label className="formFieldLabel">Mods can unban</label>
                    <div className="formField">
                        <input type="checkbox" />
                        <div className="formFieldExplanation">
                            {SettingMessages.ModsCanUnban}
                        </div>
                    </div>
                </div>
                <div className="buttonRow">
                    <button type="button">Save</button>
                </div>
            </form>        
        </Flex>
    );
}