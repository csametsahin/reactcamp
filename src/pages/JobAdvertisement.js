import React, { useEffect, useState } from 'react'
import { Table, Menu, Icon } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'


export default function JobAdvertisement() {
    const [jobadvertisements, setJobAdvertisements] = useState([])

      useEffect(()=>{
         let jobAdvertisementService = new JobAdvertisementService()
         jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
    })
  

    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Name</Table.HeaderCell>
                        <Table.HeaderCell>Min Salary</Table.HeaderCell>
                        <Table.HeaderCell>Job Detail</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobadvertisements.map(jobadvertisement => (
                            <Table.Row key={jobadvertisement.jobadv_id}>
                                <Table.Cell>{jobadvertisement.job.jobName}</Table.Cell>
                                <Table.Cell>{jobadvertisement.min_salary}</Table.Cell>
                                <Table.Cell>{jobadvertisement.job_details}</Table.Cell>
                                <Table.Cell>{jobadvertisement.dead_line}</Table.Cell>
                                <Table.Cell>{jobadvertisement.city.cityName}</Table.Cell>
                            </Table.Row>
                        ))
                    }
             </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
               
            </Table>
        </div>
    )
}
