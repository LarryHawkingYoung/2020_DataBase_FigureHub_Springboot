package com.example.zsgc.controller;

import com.example.zsgc.entity.Figure;
import com.example.zsgc.entity.Figure2Role;
import com.example.zsgc.entity.FtoR;
import com.example.zsgc.mapper.Figure2RoleMapper;
import com.example.zsgc.mapper.FigureMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/figuretorole")
public class Figure2RoleController {
    @Autowired
    private Figure2RoleMapper figure2RoleMapper;

    @RequestMapping(value = {"/selectAll"}, method = RequestMethod.GET)
    public List<FtoR> selectAll() {
        return figure2RoleMapper.selectAll();
    }

    @RequestMapping(value = {"/selectByRoleName"}, method = RequestMethod.GET)
    public List<FtoR> selectByRoleName(String roleName) {
        return figure2RoleMapper.selectByRoleName(roleName);
    }

    @RequestMapping(value = {"/selectByFigureName"}, method = RequestMethod.GET)
    public List<FtoR> selectByFigureName(String figureName) {
        return figure2RoleMapper.selectByFigureName(figureName);
    }

    @RequestMapping(value = {"/insert"}, method = RequestMethod.POST)
    public void insertFigure2Role(Figure2Role figure2Role) {
        figure2RoleMapper.insertFigure2Role(figure2Role);
    }

    @RequestMapping(value = {"/update"}, method = RequestMethod.PUT)
    public void updateFigure2Role(Figure2Role figure2Role) {
        figure2RoleMapper.updateFigure2Role(figure2Role);
    }

    @RequestMapping(value = {"/delete"}, method = RequestMethod.DELETE)
    public void deleteFigure(int ftrId) {
        figure2RoleMapper.deleteFigure2Role(ftrId);
    }
}
