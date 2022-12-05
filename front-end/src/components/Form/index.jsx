import React from 'react';
import { useState } from 'react';
import { createArgonaute } from '../../API';
import { useDispatch } from "react-redux";
import { addMember } from '../../features/membersSlice';
import { Button, FormContainer, InputNumber, InputText, LabelText } from './style';

const Form = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: '',
        strength: '',
        intellect: '',
        quality: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createArgonaute(form)
        dispatch(addMember(form))
        setForm({
            name: '',
            strength: '',
            intellect: '',
            quality: '',
        })
    }

    return (
        <section>
            <h2>Ajouter un/e Argonaute</h2>

            <FormContainer action="" onSubmit={handleSubmit} id="sign-up-form">
                <LabelText htmlFor="name"> Nom de l'Argonaute</LabelText>
                <InputText
                    type="text"
                    id='name'
                    placeholder='Entrez un nom'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <LabelText htmlFor="strength">Force</LabelText>
                <InputNumber
                    type="text"
                    min="0"
                    max="10"
                    id='strength'
                    placeholder='1-10'
                    value={form.strength}
                    onChange={(e) => setForm({ ...form, strength: e.target.value })}
                />
                <LabelText htmlFor="intellect">Intelligence</LabelText>
                <InputNumber
                    type="text"
                    min="0"
                    max="10"
                    id='intellect'
                    placeholder='1-10'
                    value={form.intellect}
                    onChange={(e) => setForm({ ...form, intellect: e.target.value })}
                />
                <LabelText htmlFor="quality">Qualité</LabelText>
                <InputText
                    type="text"
                    id='quality'
                    placeholder='Entrez une qualité'
                    value={form.quality}
                    onChange={(e) => setForm({ ...form, quality: e.target.value })}
                />
                <Button>Envoyer</Button>
            </FormContainer>
        </section>
    );
};

export default Form;