package com.example.zsgc.mapper;

import com.example.zsgc.entity.Figure;
import com.example.zsgc.entity.Figure2Role;
import com.example.zsgc.entity.FtoR;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface Figure2RoleMapper {

    @Select("select ftrId, figureName, roleName, figure.figureId, role.roleId from figure, role, figuretorole where figure.figureId=figuretorole.figureId and role.roleId=figuretorole.roleId")
    public List<FtoR> selectAll();

    @Select("select ftrId, figureName, roleName, figure.figureId, role.roleId from figure, role, figuretorole where role.roleId=figuretorole.roleId and figure.figureId=figuretorole.figureId and figureName like concat('%', #{figureName}, '%')")
    public List<FtoR> selectByFigureName(String figureName);

    @Select("select ftrId, figureName, roleName, figure.figureId, role.roleId from figure, role, figuretorole where role.roleId=figuretorole.roleId and figure.figureId=figuretorole.figureId and roleName like concat('%', #{roleName}, '%')")
    public List<FtoR> selectByRoleName(String roleName);

    @Insert("insert into figuretorole(figureId, roleId) values (#{figureId},#{roleId})")
    public void insertFigure2Role(Figure2Role figure2Role);

    @Update("update figuretorole set figureId=#{figureId},roleId=#{roleId} where ftrId=#{ftrId}")
    public void updateFigure2Role(Figure2Role figure2Role);

    @Delete("delete from figuretorole where ftrId=#{ftrId}")
    public void deleteFigure2Role(int ftrId);
}
