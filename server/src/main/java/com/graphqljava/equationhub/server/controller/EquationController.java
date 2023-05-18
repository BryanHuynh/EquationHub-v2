package com.graphqljava.equationhub.server.controller;

import com.graphqljava.equationhub.server.model.Equation;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Controller
@CrossOrigin()
public class EquationController {
    @QueryMapping
    public Equation equationById(@Argument String id ) {
        return Equation.getById(id);
    }

    @QueryMapping
    public List<Equation> equationsByUserId(@Argument String id ) {
        return Equation.getIdsByUserId(id);
    }

}
