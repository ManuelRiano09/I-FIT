package org.ifit.entities.responsesgym;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data

@Document(collection = "machine")
public class Machine {

    @Id
    private String id;
    private String name;
    private String description;
    private String url;
}
