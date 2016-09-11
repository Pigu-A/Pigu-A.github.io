// ==UserScript==
// @name         nitokappa
// @namespace    me.pigdevil.nitokappa
// @version      1.1.3
// @description  Nitori Kawashiro is the best Kappa.
// @include      /https?://\w*.reddit.com/r/twitchplayspokemon/*
// @include      /https?://\w*.reddit.com/r/TPPKappa/*
// @author       pigdevil2010
// @run-at       document-end
// ==/UserScript==

var ntkcss = 'a[href|="#helix"], a[href|="#dome"], a[href|="#birdjesus"], a[href|="#abby"], a[href|="#falseprophet"], a[href|="#martyr"], a[href|="#pcblood"], a[href|="#lazor"], a[href|="#burrito"], a[href|="#c3"], a[href|="#m4"], a[href|="#wattson"], a[href|="#WAHAHA"], a[href|="#ziggy"], a[href|="#domezam"], a[href|="#spinarak"], a[href|="#root"], a[href|="#claw"], a[href|="#solareon"], a[href|="#sunshine"], a[href|="#lotid"], a[href|="#starmie"], a[href|="#chatot"], a[href|="#awoo"], a[href|="#tppRng"], a[href|="#tppPokeyen"], a[href|="#tppCrit"], a[href|="#tppHax"], a[href|="#tppMiss"], a[href|="#tppPc"], a[href|="#tppRobored"], a[href|="#tppRiot"], a[href|="#tppDome"], a[href|="#tppHelix"], a[href|="#tppSlowpoke"], a[href|="#slowpoke"], a[href|="#tppCursor"], a[href|="#tppTrumpet"], a[href|="#tppFogChamp"], a[href|="#Kappa"], a[href|="#kappa"], a[href|="#kreygasm"], a[href|="#Kreygasm"], a[href|="#pogchamp"], a[href|="#PogChamp"], a[href|="#keepo"], a[href|="#Keepo"], a[href|="#swiftrage"], a[href|="#SwiftRage"], a[href|="#failfish"], a[href|="#FailFish"], a[href|="#onehand"], a[href|="#OneHand"], a[href|="#trihard"], a[href|="#TriHard"], a[href|="#kapow"], a[href|="#KAPOW"], a[href|="#biblethump"], a[href|="#BibleThump"], a[href|="#praiseit"], a[href|="#PraiseIt"], a[href|="#dansgame"], a[href|="#DansGame"], a[href|="#elegiggle"], a[href|="#EleGiggle"], a[href|="#wutface"], a[href|="#WutFace"], a[href|="#prchase"], a[href|="#PRChase"], a[href|="#opieop"], a[href|="#OpieOP"], a[href|="#babyrage"], a[href|="#BabyRage"], a[href|="#residentsleeper"], a[href|="#ResidentSleeper"], a[href|="#bort"], a[href|="#BORT"], a[href|="#deilluminati"], a[href|="#deIlluminati"], a[href|="#chairman"] {background-image: url("http://i.imgur.com/WOOiBr4.png");}';

var ntk = document.createElement('style');
ntk.innerHTML = ntkcss;
document.body.appendChild(ntk);