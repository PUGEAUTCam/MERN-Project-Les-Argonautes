import React, { useEffect } from 'react';
import { getAllArgonautes } from '../../API';
import { useDispatch, useSelector } from "react-redux";
import { setMember } from '../../features/membersSlice';
import { CardMember, ContainerCard, DivBubble, SpanBubble, TitleCrew } from './style';
import dayjs from 'dayjs';

const CrewList = () => {
    const dispatch = useDispatch();
    const membersStore = useSelector((state) => state.membersStore);

    useEffect(() => {
        getAllArgonautes().then((res) => dispatch(setMember(res.data)))
    }, [])

    return (
        <div>
            <TitleCrew>Membres de l'équipage</TitleCrew>
            <ContainerCard>
                {membersStore.members?.map((member, index) =>
                    <CardMember key={index}>
                        <h3>{member.name}</h3>
                        <DivBubble>
                            <p>Force <SpanBubble>{member.strength}</SpanBubble></p>
                            <p>Intelligence <SpanBubble>{member.intellect}</SpanBubble></p>
                        </DivBubble>
                        <p>Qualité : <span>{member.quality}</span></p>
                        <p>Membre ajouté le <span>{dayjs(member.createdAt).format("DD/MM/YYYY")}</span></p>
                    </CardMember>
                )}
            </ContainerCard>
        </div>
    );
};

export default CrewList;