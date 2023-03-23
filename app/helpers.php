<?php

function flashMessage($message, $type) {
    session()->flash('message', $message); 
    session()->flash('type', $type); 
}