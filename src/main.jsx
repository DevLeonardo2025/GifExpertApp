import React from 'react';
import ReaactDom from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReaactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
)