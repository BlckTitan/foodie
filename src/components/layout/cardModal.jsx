'use client'
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import LoadingSpinner from './LoadingSpinner';

export default function CardModal(props) {
    
    if(!props?.data) return <LoadingSpinner/>

  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        
        <Modal.Body>
            <Card border="light" style={{ width: '100%'}}>
                <Card.Img variant="top" src={props?.data[0]?.image?.secure_url} />
                <Card.Body>
                    <Card.Title>{props?.data[0]?.title}</Card.Title>
                    <Card.Text>
                        {props?.data[0]?.description}
                    </Card.Text>
                    <Card.Text>
                        &#8358;
                        {props?.data[0]?.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Modal.Body>

        <Modal.Footer>

            <Button variant='secondary' onClick={props.onHide}>Close</Button>
    
        </Modal.Footer>

    </Modal>
  )
}