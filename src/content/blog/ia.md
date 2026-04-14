---
title: "Feature for macOS"
description: "an idea for an macOS feature 💎 inspired in FaceID."
tags: ["Feature", "My Projects"]
date: "2026-04-13"
---

# Graveyard Companion App

## The Idea

I want to build an app inspired by Graveyard Keeper where I can track my progress and store ideas.

The goal is to mix:
- game progress
- personal notes
- dev ideas

---

## Core Features

### 1. Progress tracking

- Track in-game days  
- Track graveyard score  
- Track resources  

### 2. Idea storage

- Save app ideas  
- Save random thoughts  
- Save system designs  

### 3. Dev log

- Write small logs like:
  - "Day 5: improved graveyard"
  - "Need better resource management"

---

## iOS code example / Swift mindset

This is just a simple idea structure:

```java
class Entry {
    int day;
    int graveyardScore;
    String notes;
    float progress;
}