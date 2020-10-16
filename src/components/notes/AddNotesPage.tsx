import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import { noteAdd, notesStateType, noteValidation, noteSuccess } from "../../store/actions";

import { Form } from "react-bootstrap";

import Create from "@material-ui/icons/Create";
import FormatAlignJustify from "@material-ui/icons/FormatAlignJustify";
import deepOrange from "@material-ui/core/colors/deepOrange";

import  SaveComponent from "./SaveComponent";

const AddNotesPage: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const [ noteTitle, setNoteTitle ] = useState('');
    const [ noteText, setNoteText ] = useState('');

    const onChangeTitle = (event: any) => setNoteTitle(event.target.value);
    const onChangeText = (event: any) => setNoteText(event.target.value);
    const addHandler = () => {
        if(noteTitle.trim() === '' ||noteTitle.trim().length <= 2 ) {
            setNoteTitle('');
            dispatch(noteValidation('Header field must be at least two characters'));
            return;
        }
        else if(noteText.trim() === ''|| noteText.trim().length <= 6) {
            setNoteText('');
            dispatch(noteValidation('Note field must have at least six characters'));
            return;
        } 

        const note: notesStateType = {
            title: noteTitle,
            body: noteText,
            id: Date.now(),
            complated: false,
            active: false,
            current: false
        }

        dispatch(noteAdd(note));
        dispatch(noteSuccess());

        setNoteText('');
        setNoteTitle('');
    }

    return (
        <div>
            <Form onSubmit={(event) => event.preventDefault()}>
                <Form.Group controlId="noteTitle">
                    <Form.Label className="notes-add-label"><Create fontSize="small" style={{color: deepOrange[500]}}></Create><span style={{paddingLeft: '10px', verticalAlign: 'middle'}}>Note title</span></Form.Label>
                    <Form.Control className="notes-add-input" onChange={ onChangeTitle } value={ noteTitle } size="lg" type="text" placeholder="products"></Form.Control>
                </Form.Group>
                <Form.Group controlId="noteText">
                    <Form.Label className="notes-add-label"><FormatAlignJustify fontSize="small" style={{color: deepOrange[500]}}></FormatAlignJustify><span style={{paddingLeft: '10px', verticalAlign: 'middle'}}>Write your note</span></Form.Label>
                    <Form.Control onChange={ onChangeText } value={ noteText } className="notes-add-textarea" as="textarea" type="text" placeholder="Any note"></Form.Control>
                </Form.Group>
                <SaveComponent onClick={ addHandler } />
            </Form>
        </div>
    )
}

export default AddNotesPage;