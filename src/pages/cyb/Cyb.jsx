import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from '../../containers';
import hacker from '../../assets/hacker.jpg';
import phishing from '../../assets/phishing.mp4';
import './cyb.css';

import { BackToTop } from "../../components";
import { TextReader } from "../../components";
import { Invert } from "../../components";


const Cyb = () => {
    return(
    <div className='cyb-container'>
        <Header />
        <TextReader />
        <Invert />
        <div className='cyb-content'>
            <h1 id="cyb-title">Cyber Security - Staying Safe Online</h1>
            <img src={hacker} alt=""  className='hacker'/>
            <div className='cyb-content-heading'>
                <p>
                    From April of 2022 to April of 2023, there were approximately 2.39
                    million instances of cyber crime - including 49,000 instances of fraud.
                    
                    As more and more aspects of our lives move online, it's important that
                    we learn and takes steps to avoid becoming victims so that we might
                    keep our money and our identities safe. This page will give you the
                    information you need to spot many attacks early as well as some quick
                    and easy top tips on how to avoid falling victim.
                </p>
            </div>


            <div className='cyb-content-attacks'>
            <h2>Common Cyberattacks</h2>
                <div className='cyb-content-attacks-heading'>
                    <p>
                    The most common cyber threats you're likely to encounter online are
                    scams.
                    </p>
                    <p id='cyb-watchout'>Here are two in particular to watch out for:</p>
                </div>

                <div className='cyb-content-attacks-content'>
                    <h3>Phishing</h3>
                    <video width="1024" height="576" controls="controls" autoplay="false">
                        <source src={phishing}/>
                    </video>
                    <p id='phishing-content'>
                    A scam, often in the form of an email, where the attaker tries to
                    deveive the victim into revealing sensitive information by pretending
                    to be a reputable person or company.
                    </p>
                </div>
             
                
                <div className='cyb-content-tips'>
                    <ul>
                        <li>
                            Don't click on any links in emails that try to get you to sign in
                            to an account, even if they say it's urgent - go to the website
                            yourself to make sure it's the real one.
                        </li>
                        <li>
                            Emails from an impersonator often contain spelling or grammar
                            mistakes. Emails from a real company should read properly and
                            professionally in tone.
                        </li>
                        <li>
                            Make sure the sender's email address is correct for who you expect
                            the email to be from (mybank@gmail.com vs my.bank@gmail.com, etc.)
                        </li>
                        <li>
                            You can report suspected phishing emails by forwarding them to&nbsp;
                            <a href="mailto: report@phishing.gov.uk">report@phishing.gov.uk</a>
                        </li>
                    </ul>
                </div>
               
                <div className='cyb-content-attacks-content'>
                    <h3>Scam calls</h3>
                    <p>
                        A caller pretending to be from (usually) your bank, internet service
                        provider, etc. with the goal of getting you to hand over money or your
                        sensitive information.
                    </p>
                </div>

                <div className='cyb-content-tips'>
                    <ul>
                        <li>
                        These scammers will often employ scare tactics and create a sense of
                        urgency to get you to make decisions without thinking them through.
                            <ul>
                                <li>
                                    Real representatives of the calling organisation will remain calm
                                    and professional, no matter the seriousness of the situation
                                </li>
                            </ul>
                        </li>
                        <li>
                            If in doubt, hang up and call the real orgainisation yourself to
                            check the legitimacy of the call.
                        </li>
                    </ul>   
                </div>

                <div className='cyb-content-tips'>
                    <ul>
                        <li>
                        These scammers will often employ scare tactics and create a sense of
                        urgency to get you to make decisions without thinking them through.
                            <ul>
                                <li>
                                    Real representatives of the calling organisation will remain calm
                                    and professional, no matter the seriousness of the situation
                                </li>
                            </ul>
                        </li>
                        <li>
                            If in doubt, hang up and call the real orgainisation yourself to
                            check the legitimacy of the call.
                        </li>
                    </ul>
                </div>
               
                <div className='cyb-content-attacks-content'>
                    <h2>Password habits</h2>
                    <p>
                    Hackers may attempt to gain access to your online accounts and bad
                    password habits can make it easy for them. Everyone is a target - so
                    here are some quick tips on how to keep your accounts secure.
                    </p>
                </div>

                <div className='cyb-content-tips'>
                    <ul>
                        <li>
                            Keep all of your software up-to-date
                        </li>
                    <li>
                        Create strong passwords using at least eight characters
                        <ul>
                            <li>At least one uppercase character</li>
                            <li>At least one number</li>
                            <li>At leaset one symbol</li>
                        </ul>
                    </li>
                        <li>
                            Don't use the same passwords for multiple services
                        </li>
                        <li>
                            Use a password manager to keep track of and generate passwords for
                            you
                        </li>
                    </ul>
                </div>
            </div>

            <div className='cyb-content-other'>
                <h2>Other Resources</h2>
                <p>
                The National Cyber Security Centre (NCSC) provides free advice on
                cybersecurity, including a YouTube video.
                </p>

                <p>This resource is available on their 10 Steps to Cyber Security
                webpage&nbsp;<a href="https://www.ncsc.gov.uk/collection/10-steps/" target="_blank">here</a>.
                </p>
            </div>
        </div>
        <BackToTop />
    </div>
    );
};

export default Cyb

