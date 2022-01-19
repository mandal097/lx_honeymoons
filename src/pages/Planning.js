import React from 'react'
import styled from 'styled-components'
import Planningheader from '../components/Planningheader/Planningheader'
import PlanningSection from '../components/PlanningSection/PlanningSection'

const Planning = () => {
    return (
        <Container>
            <Planningheader/>
            <PlanningSection/>
        </Container>
    )
}
const Container = styled.div`
height:100vh;
overflow-y: scroll;
`

export default Planning
