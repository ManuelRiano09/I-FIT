package org.ifit.entities.responsesgym;


import lombok.ToString;

import java.util.List;

@ToString
public class Routine {

    private Status.StatusEnum status;
    private List<Exercise> exercises;

    public Status.StatusEnum getStatus() {
        return status;
    }

    public void setStatus(Status.StatusEnum status) {
        this.status = status;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

}

