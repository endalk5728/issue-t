import React from 'react'
//import {Button} from "@nextui-org/react";
import {Button,Table} from "@radix-ui/themes";
import Link from 'next/link';


import { PrismaClient } from '@prisma/client'
import IssueStatusbadge from '../component/IssueStatusbadge';

const prisma = new PrismaClient()

const Issuespage = async() => {
  const issues = await prisma.issue.findMany()

  return (
    <div>
      <div className='mb-5'>
         <Button >
      <Link href='/issues/new'> New Issue</Link>  
    </Button></div>
    
<Table.Root variant='surface'>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {issues.map(issue=>(
      <Table.Row key={issue.id}>

<Table.Cell>
  {issue.title}
<div className='block md:hidden'>
  <IssueStatusbadge status={issue.status}/>
</div>
<div  className='text-blue-800 block md:hidden'>{issue.createdAt.toDateString()}</div>
</Table.Cell>
<Table.Cell className='hidden md:table-cell'><IssueStatusbadge status={issue.status}/></Table.Cell>
<Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
      </Table.Row>

      
    ))}
  </Table.Body>

   </Table.Root>
    </div>
  )
}

export default Issuespage