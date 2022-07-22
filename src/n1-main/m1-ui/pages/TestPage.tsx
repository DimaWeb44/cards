import React from 'react';
import SuperInputText from "../common/components/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/components/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/components/c3-SuperCheckbox/SuperCheckbox";

export const TestPage = () => {
    return (
        <div className={''}>
            <SuperInputText/>
            <SuperButton>default</SuperButton>
            <SuperCheckbox/>
        </div>
    );
}