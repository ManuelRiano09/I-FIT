package org.i_fit.entities;


public class Routine {

    private Status.StatusEnum status;
    private String exercise;
    private Machine Machine;
    private Integer repetition;
    private Integer series;

    public Status.StatusEnum getStatus() {
        return status;
    }

    public void setStatus(Status.StatusEnum status) {
        this.status = status;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public org.i_fit.entities.Machine getMachine() {
        return Machine;
    }

    public void setMachine(org.i_fit.entities.Machine machine) {
        Machine = machine;
    }

    public Integer getRepetition() {
        return repetition;
    }

    public void setRepetition(Integer repetition) {
        this.repetition = repetition;
    }

    public Integer getSeries() {
        return series;
    }

    public void setSeries(Integer series) {
        this.series = series;
    }
}

