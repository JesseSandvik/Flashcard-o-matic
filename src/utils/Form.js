import React from 'react';
import CancelButton from '../components/buttons/CancelButton';
import SubmitButton from '../components/buttons/SubmitButton';

export default function Form(props) {
    return (
        <>
            <h2 className="p-2">{props.formTitle}</h2>
            <form onSubmit={props.submitHandler}>
                <div className="row">
                    <div className="col">
                    <label htmlFor={props.htmlForOne}>{props.formLabelOne}</label>
                    <textarea
                        required
                        rows="4" cols="30"
                        placeholder={props.formPlaceholderOne}
                        name={props.formNameOne}
                        type="text"
                        onChange={props.changeHandler}
                        defaultValue={props.formValueOne ? props.formValueOne : ""}
                    />
                    </div>
                    <div className="col">
                    <label htmlFor={props.htmlForTwo}>{props.formLabelTwo}</label>
                    <textarea
                        required
                        rows="4" cols="30"
                        placeholder={props.formPlaceholderTwo}
                        name={props.formNameTwo}
                        type="text"
                        onChange={props.changeHandler}
                        defaultValue={props.formValueTwo ? props.formValueTwo : ""}
                    />
                    </div>
                    </div>
                    <br />
                        <div className="row">
                    <CancelButton cancelHandler={props.cancelHandler} />
                    <SubmitButton />
                </div>
            </form>
        </>
    );
};