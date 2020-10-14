package org.i_fit.entities.responsesgym;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "apprentice")
public class Apprentice {

    @Id
    public Integer document;
    private String email;
    private String password;
    private String name;
    private Journey.JourneyEnum journeyEnum;
    private Integer weight;
    private Integer age;
    private Float height;
    private String comments;
    private String limitations;
    private Routine routine;





}
