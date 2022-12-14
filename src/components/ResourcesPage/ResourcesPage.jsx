import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './ResourcesPage.css';

//This Page displays resources sponsors as well as their categories

function ResourcesPage() {
    const resources = useSelector((store) => store.resource)
    const [heading, setHeading] = useState('Resources');
    const dispatch = useDispatch();

    //on load, fetch resources
    useEffect(() => {
        dispatch({
            type: 'FETCH_RESOURCE',
        })
    }, [])

    // these are our categories for resources
    let legal = []
    let health = []
    let business = []

    // this function sorts all of the resources into their categories to be displayed
    const sort = () => {
        for (let resource of resources) {
            console.log(resource)
            if (resource.category_id === 1) {
                legal.push(resource);
            }
            if (resource.category_id === 2) {
                health.push(resource);
            }
            if (resource.category_id === 3) {
                business.push(resource);
            }
        } return console.log(legal, health, business)
    }

    //run the sorting function
    sort()

    return (
        <>
            <div class="section">
                <h2>{heading}</h2>
            </div>
            <div class="header">
                <h2>Legal</h2>
            </div>
            <div class="section">
                {legal.map(resource =>
                    <ul key={resource.id}>
                        <li>{resource.name}</li>
                        <li>{resource.address}</li>
                        <li>{resource.phoneNumber}</li>
                    </ul>)}
            </div>
            <div class="header">
                <h2>Health</h2>
            </div>
            <div class="section">
                {health.map(resource =>
                    <ul key={resource.id}>
                        <li>{resource.name}</li>
                        <li>{resource.address}</li>
                        <li>{resource.phoneNumber}</li>
                    </ul>)}
            </div>
            <div class="header">
                <h2>Business</h2>
            </div>
            <div class="section">
                {business.map(resource =>
                    <ul key={resource.id}>
                        <li>{resource.name}</li>
                        <li>{resource.address}</li>
                        <li>{resource.phoneNumber}</li>
                    </ul>)}
            </div>
        </>
    );
}

export default ResourcesPage;
