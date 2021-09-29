import { Flex } from "components/Layout";
import { FancyTextBox } from "components/Forms";

export const AccountPage = () => {
    return (
        <Flex direction="column" alignItems="center">
            <form className="groupForm">
                <h2>Personal Details</h2>
                <div className="groupFormBody">
                    <label className="formFieldLabel">First Name</label>
                    <div className="formField">
                        <FancyTextBox value="Daryl" />
                    </div>
                    <label className="formFieldLabel">Last Name</label>
                    <div className="formField">
                        <FancyTextBox value="Duck" />
                    </div>
                    <label className="formFieldLabel">Username</label>
                    <div className="formField">
                        <FancyTextBox value="daryl_duck" />
                    </div>
                </div>
                <div className="buttonRow">
                    <button type="button">Save</button>
                </div>
            </form>

            <form className="groupForm">
                <h2>Address</h2>
                <div className="groupFormBody">
                    <label className="formFieldLabel">Line 1</label>
                    <div className="formField">
                        <FancyTextBox value="123 Home Street" />
                    </div>
                    <label className="formFieldLabel">Line 2</label>
                    <div className="formField">
                        <FancyTextBox value="Unit 1" />
                    </div>
                    <label className="formFieldLabel">City</label>
                    <div className="formField">
                        <FancyTextBox value="Melbourne" />
                    </div>
                </div>
                <div className="buttonRow">
                    <button type="button">Save</button>
                </div>
            </form>
        </Flex>
    );    
}